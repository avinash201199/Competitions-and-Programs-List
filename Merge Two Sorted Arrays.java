import java.util.*;
import java.lang.*;
import java.io.*;

class MergeTwoSorted
{
	public static void mergeArrays(int[] arr1, int[] arr2, int n1,
								int n2, int[] arr3)
	{
		int i = 0, j = 0, k = 0;
		while (i<n1 && j <n2)
		{
			if (arr1[i] < arr2[j]){
				arr3[k++] = arr1[i++];
      }
			else{
				arr3[k++] = arr2[j++];
      }
		}
	
		while (i < n1){
			arr3[k++] = arr1[i++];
    }
		while (j < n2){
			arr3[k++] = arr2[j++];
    }
	}
	
	public static void main (String[] args)
	{
		int[] arr1 = {1, 2, 3, 4};
		int n1 = arr1.length;
	
		int[] arr2 = {5, 6, 7, 8};
		int n2 = arr2.length;
	
		int[] arr3 = new int[n1+n2];
		
		mergeArrays(arr1, arr2, n1, n2, arr3);
	
		System.out.println("Array after merging");
		for (int i=0; i < n1+n2; i++)
			System.out.print(arr3[i] + " ");
	}
}
