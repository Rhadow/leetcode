class MyQueue:

    def __init__(self):
        self.stack1 = []
        self.stack2 = []

    def push(self, element):
        # write your code here
        self.stack1.append(element)

    def top(self):
        # write your code here
        # return the top element
        return self.stack1[0]

    def pop(self):
        # write your code here
        # pop and return the top element
        res = None
        while (self.stack1):
            ele = self.stack1.pop(-1)
            if (self.stack1):
                self.stack2.append(ele)
            else:
                res = ele
        while (self.stack2):
            ele = self.stack2.pop(-1)
            self.stack1.append(ele)
        return res
