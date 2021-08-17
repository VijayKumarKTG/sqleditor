//import { readString } from 'react-papaparse';
import Papa from 'papaparse';

export async function getData(url) {
  const response = await fetch(url);
  const result = await response.text();
  const result_2 = Papa.parse(result);
  return result_2;
}
