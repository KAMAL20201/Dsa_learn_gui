export const codeExamples = {
  dataStructures: {
    array: {
      java: `// Array Operations in Java
public class ArrayOperations {
    public static void main(String[] args) {
        // Initialize array
        int[] arr = {5, 2, 8, 1, 9};

        // Access element
        System.out.println("Element at index 0: " + arr[0]);

        // Update element
        arr[2] = 10;

        // Traverse array
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        // Search element
        int target = 8;
        int index = linearSearch(arr, target);
        System.out.println("Index of " + target + ": " + index);
    }

    // Linear search
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }

    // Bubble Sort
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}`,
      cpp: `// Array Operations in C++
#include <iostream>
#include <vector>
using namespace std;

// Linear search
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Bubble Sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    // Initialize array
    int arr[] = {5, 2, 8, 1, 9};
    int n = sizeof(arr) / sizeof(arr[0]);

    // Access element
    cout << "Element at index 0: " << arr[0] << endl;

    // Update element
    arr[2] = 10;

    // Traverse array
    cout << "Array elements: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Search element
    int target = 8;
    int index = linearSearch(arr, n, target);
    cout << "Index of " << target << ": " << index << endl;

    // Sort array
    bubbleSort(arr, n);
    cout << "Sorted array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}`,
      python: `# Array Operations in Python

def linear_search(arr, target):
    """Linear search in array"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def bubble_sort(arr):
    """Bubble sort algorithm"""
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Main program
if __name__ == "__main__":
    # Initialize array
    arr = [5, 2, 8, 1, 9]

    # Access element
    print(f"Element at index 0: {arr[0]}")

    # Update element
    arr[2] = 10

    # Traverse array
    print("Array elements:", end=" ")
    for num in arr:
        print(num, end=" ")
    print()

    # Search element
    target = 8
    index = linear_search(arr, target)
    print(f"Index of {target}: {index}")

    # Sort array
    arr = [5, 2, 8, 1, 9]
    sorted_arr = bubble_sort(arr)
    print(f"Sorted array: {sorted_arr}")

    # List comprehension (Python-specific)
    squared = [x**2 for x in arr]
    print(f"Squared elements: {squared}")`
    },
    'linked-list': {
      java: `// Linked List Implementation in Java
class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head;

    // Insert at head
    public void insertAtHead(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    // Insert at tail
    public void insertAtTail(int data) {
        Node newNode = new Node(data);

        if (head == null) {
            head = newNode;
            return;
        }

        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete node with given value
    public void delete(int data) {
        if (head == null) return;

        if (head.data == data) {
            head = head.next;
            return;
        }

        Node current = head;
        while (current.next != null && current.next.data != data) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
        }
    }

    // Reverse the linked list
    public void reverse() {
        Node prev = null;
        Node current = head;
        Node next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
    }

    // Print the list
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("NULL");
    }

    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.insertAtTail(10);
        list.insertAtTail(20);
        list.insertAtTail(30);
        list.insertAtHead(5);
        list.display();

        list.reverse();
        System.out.println("After reverse:");
        list.display();
    }
}`,
      cpp: `// Linked List Implementation in C++
#include <iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() {
        head = nullptr;
    }

    // Insert at head
    void insertAtHead(int data) {
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
    }

    // Insert at tail
    void insertAtTail(int data) {
        Node* newNode = new Node(data);

        if (head == nullptr) {
            head = newNode;
            return;
        }

        Node* current = head;
        while (current->next != nullptr) {
            current = current->next;
        }
        current->next = newNode;
    }

    // Delete node with given value
    void deleteNode(int data) {
        if (head == nullptr) return;

        if (head->data == data) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        Node* current = head;
        while (current->next != nullptr && current->next->data != data) {
            current = current->next;
        }

        if (current->next != nullptr) {
            Node* temp = current->next;
            current->next = current->next->next;
            delete temp;
        }
    }

    // Reverse the linked list
    void reverse() {
        Node* prev = nullptr;
        Node* current = head;
        Node* next = nullptr;

        while (current != nullptr) {
            next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        head = prev;
    }

    // Display the list
    void display() {
        Node* current = head;
        while (current != nullptr) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "NULL" << endl;
    }
};

int main() {
    LinkedList list;
    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);
    list.insertAtHead(5);
    list.display();

    list.reverse();
    cout << "After reverse:" << endl;
    list.display();

    return 0;
}`,
      python: `# Linked List Implementation in Python

class Node:
    """Node class for linked list"""
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    """Singly Linked List implementation"""
    def __init__(self):
        self.head = None

    def insert_at_head(self, data):
        """Insert node at the beginning"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def insert_at_tail(self, data):
        """Insert node at the end"""
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        current = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node

    def delete(self, data):
        """Delete node with given value"""
        if self.head is None:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current = self.head
        while current.next is not None and current.next.data != data:
            current = current.next

        if current.next is not None:
            current.next = current.next.next

    def reverse(self):
        """Reverse the linked list"""
        prev = None
        current = self.head

        while current is not None:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        self.head = prev

    def display(self):
        """Print the linked list"""
        current = self.head
        elements = []
        while current is not None:
            elements.append(str(current.data))
            current = current.next
        print(" -> ".join(elements) + " -> NULL")

    def search(self, data):
        """Search for a value in the list"""
        current = self.head
        position = 0
        while current is not None:
            if current.data == data:
                return position
            current = current.next
            position += 1
        return -1

# Example usage
if __name__ == "__main__":
    ll = LinkedList()
    ll.insert_at_tail(10)
    ll.insert_at_tail(20)
    ll.insert_at_tail(30)
    ll.insert_at_head(5)

    print("Original list:")
    ll.display()

    ll.reverse()
    print("\\nAfter reverse:")
    ll.display()

    ll.delete(20)
    print("\\nAfter deleting 20:")
    ll.display()`
    }
  },
  algorithms: {
    'bubble-sort': {
      java: `// Bubble Sort in Java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        for (int i = 0; i < n - 1; i++) {
            swapped = false;

            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // If no swapping occurred, array is sorted
            if (!swapped) {
                break;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        System.out.println("Original array:");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("\\nSorted array:");
        printArray(arr);
    }

    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}`,
      cpp: `// Bubble Sort in C++
#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;

    for (int i = 0; i < n - 1; i++) {
        swapped = false;

        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }

        // If no swapping occurred, array is sorted
        if (!swapped) {
            break;
        }
    }
}

void printArray(const vector<int>& arr) {
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};

    cout << "Original array: ";
    printArray(arr);

    bubbleSort(arr);

    cout << "Sorted array: ";
    printArray(arr);

    return 0;
}`,
      python: `# Bubble Sort in Python

def bubble_sort(arr):
    """
    Bubble sort algorithm with optimization
    Time Complexity: O(n²) worst case, O(n) best case
    Space Complexity: O(1)
    """
    n = len(arr)

    for i in range(n - 1):
        swapped = False

        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                # Swap elements
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # If no swapping occurred, array is sorted
        if not swapped:
            break

    return arr

# Example usage
if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]

    print("Original array:", arr)

    sorted_arr = bubble_sort(arr.copy())

    print("Sorted array:", sorted_arr)

    # Demonstrate best case (already sorted)
    sorted_input = [1, 2, 3, 4, 5]
    print("\\nAlready sorted:", sorted_input)
    bubble_sort(sorted_input)
    print("Result:", sorted_input)`
    },
    'binary-search': {
      java: `// Binary Search in Java
public class BinarySearch {
    // Iterative approach
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            }

            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; // Target not found
    }

    // Recursive approach
    public static int binarySearchRecursive(int[] arr, int target, int left, int right) {
        if (left > right) {
            return -1;
        }

        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] < target) {
            return binarySearchRecursive(arr, target, mid + 1, right);
        } else {
            return binarySearchRecursive(arr, target, left, mid - 1);
        }
    }

    public static void main(String[] args) {
        int[] arr = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78};
        int target = 23;

        int index = binarySearch(arr, target);

        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found");
        }
    }
}`,
      cpp: `// Binary Search in C++
#include <iostream>
#include <vector>
using namespace std;

// Iterative approach
int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Recursive approach
int binarySearchRecursive(const vector<int>& arr, int target, int left, int right) {
    if (left > right) {
        return -1;
    }

    int mid = left + (right - left) / 2;

    if (arr[mid] == target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

int main() {
    vector<int> arr = {2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78};
    int target = 23;

    int index = binarySearch(arr, target);

    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }

    return 0;
}`,
      python: `# Binary Search in Python

def binary_search(arr, target):
    """
    Iterative binary search
    Time Complexity: O(log n)
    Space Complexity: O(1)
    """
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Target not found

def binary_search_recursive(arr, target, left=0, right=None):
    """
    Recursive binary search
    Time Complexity: O(log n)
    Space Complexity: O(log n) due to recursion stack
    """
    if right is None:
        right = len(arr) - 1

    if left > right:
        return -1

    mid = left + (right - left) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)

# Example usage
if __name__ == "__main__":
    arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78]
    target = 23

    # Iterative approach
    index = binary_search(arr, target)
    print(f"Iterative: Element found at index: {index}")

    # Recursive approach
    index = binary_search_recursive(arr, target)
    print(f"Recursive: Element found at index: {index}")

    # Search for non-existent element
    target = 100
    index = binary_search(arr, target)
    if index == -1:
        print(f"\\nElement {target} not found")`
    }
  }
};
