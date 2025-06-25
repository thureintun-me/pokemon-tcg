import { Pokemon } from "@/types/pokemon.type";
import axiosInstance from "@/utils/axiosInstance";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

type PokemonResponse = {
  pokemons: Pokemon[];
  nextPage: number | null;
};

const useFetchPokemon = () => {
  const getAllProducts = async ({
    pageParam = 1,
  }: {
    pageParam?: number;
  }): Promise<PokemonResponse> => {
    try {
      const response = await axiosInstance.get(
        `cards?page=${pageParam}&pageSize=3`,
      );

      // Check if the response contains valid data
      if (response && response.data) {
        // Assuming response.data is an array of products
        const products: Pokemon[] = response.data.data;

        return { pokemons: products, nextPage: pageParam + 1 };
      } else {
        console.log("Invalid response data");
        return { pokemons: [], nextPage: null };
      }
    } catch (error) {
      // Handle errors (network issues, timeout, etc.)
      console.log("Error fetching products:", error);
      return { pokemons: [], nextPage: null };
    }
  };

  return useInfiniteQuery({
    initialData: undefined,
    initialPageParam: undefined,
    queryKey: ["pokemon"],
    queryFn: getAllProducts,
    getNextPageParam: (lastPage) => {
      if (lastPage.pokemons.length < 3) return undefined;
      return lastPage.nextPage;
    },
  });
};

export default useFetchPokemon;
