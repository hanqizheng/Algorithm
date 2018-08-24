
// struct ListNode
// {
//   int val;
//   ListNode* next;
// };

// class Solution {
// public:
//     ListNode* deleteDuplicates(ListNode* head) {
//         ListNode* tail;
//         while (head->next != nul) {
//             tail = head->next;
//             if (head->val == tail->val) {
//                 head->next = tail->next;
//                 tail->next = NULL;
//             }
//             head = head->next;
//         }
//         return head;
//     }
// };

// int main(int argc, char const *argv[])
// {
//   Solution S;
//   ListNode* a;
//   for (int i = 0; i < 5; i++) {
    
//   }
//   S.deleteDuplicates(a);
//   return 0;
// }

