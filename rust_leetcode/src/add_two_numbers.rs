// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}

impl ListNode {
  #[inline]
  pub fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}

pub struct Solution;

impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
      fn sum(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>, carry: i32) -> Option<Box<ListNode>> {

        if l1.is_none() && l2.is_none() && carry == 0 {
          return None;
        }

        let l1_val = l1.as_ref().map_or(0, |node| node.val);
        let l2_val = l2.as_ref().map_or(0, |node| node.val);
        let result_sum = l1_val + l2_val + carry;

        let mut result = ListNode::new(result_sum % 10);
        result.next = sum(
          l1.map(|node| *node).and_then(|node| node.next),
          l2.map(|node| *node).and_then(|node| node.next),
          result_sum / 10,
        );
        
        Some(Box::new(result))
      }
      
      sum(l1, l2, 0)
    }
}