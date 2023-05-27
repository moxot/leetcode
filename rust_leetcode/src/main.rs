use crate::add_two_numbers::ListNode;

mod add_two_numbers;
mod longest_substring_with_repeating_characters;

fn main() {
    let values1 = [1, 2, 3];
    let values2 = [4, 5, 6, 7];

    let list1 = create_linked_list(&values1);
    let list2 = create_linked_list(&values2);
    let result = add_two_numbers::Solution::add_two_numbers(list1, list2);
    
    let str = "abcab";
    let r2 = longest_substring_with_repeating_characters::Solution::length_of_longest_substring(String::from(str));    
    dbg!(str);
    dbg!(r2);
    
}

pub fn create_linked_list(values: &[i32]) -> Option<Box<ListNode>> {
    let mut current_node = None;

    for &value in values.iter().rev() {
        let mut new_node = ListNode::new(value);
        new_node.next = current_node;
        current_node = Some(Box::new(new_node));
    }

    current_node
}