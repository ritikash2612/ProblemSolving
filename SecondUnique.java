import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.stream.Collectors;

public class SecondUnique {

	public static String getSecondUniqueString(List<String> input, int nthUnique) {

		Map<String, Integer> map = new LinkedHashMap<>();

		// adding the String value from the list to the map as value and
		for (String val : input) {
			map.put(val, map.getOrDefault(val, 0) + 1);
		}

		// iterating over the frequency map and filtering items where count is 1
		List<Entry<String, Integer>> entryVal = map.entrySet().stream().filter(e -> e.getValue() == 1)
				.collect(Collectors.toList());

		int listSize = entryVal.size();
		// if the above list is empty return NA, i.e. no match found
		if (listSize <= 1)
			return "NA";

		// if filter returns only single element, return
		else if (listSize == 1)
			return entryVal.get(0).getKey();

		// return the second element from the list
		else
			return entryVal.get(nthUnique - 1).getKey();

	}

	public static void main(String[] args) {

		// as per the problem, the required element position is 2.
		int position = 2;

		List<String> input1 = Arrays.asList("abc", "def", "abc", "pqr", "def", "xyz", "abc", "mno");
		System.out.println(getSecondUniqueString(input1, position));

		List<String> input2 = Arrays.asList("nothing", "is", "unique", "is", "nothing", "unique");
		System.out.println(getSecondUniqueString(input2, position));

		// check for boundary
		List<String> input = Arrays.asList();
		System.out.println(getSecondUniqueString(input, position));

	}

}
