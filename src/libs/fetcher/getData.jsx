
import { base_url } from "../baseUrl";

export const getData = async (subUrl) => {
    const res = await fetch(base_url + subUrl, {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  };

