use std::collections::HashMap;

pub struct Solution;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut left_point = 0;
        let mut map: HashMap<String, i32> = HashMap::new();
        let mut max: i32 = 0;
        for (i, ch) in s.chars().enumerate() {
            if let Some(index) = map.insert(ch.to_string(), i as i32) {
                if index + 1 > left_point {
                    left_point = index + 1;
                }
            }
            dbg!(left_point);
            max = std::cmp::max(max, (i as i32 - left_point + 1));
        }
        max
    }
}