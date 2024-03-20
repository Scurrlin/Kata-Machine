// Insertion sort is implemented when we start with a minimum sorted list, then
// insert the next element into the correct position within the sorted portion
// of the array
export default function insertion_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        const val = arr[i];
        let idx = i - 1;
        while (idx >= 0 && arr[idx] > val) {
            arr[idx + 1] = arr[idx];
            arr[idx] = val;
            idx--;
        }
    }
}