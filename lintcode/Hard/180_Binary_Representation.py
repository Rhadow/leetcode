class Solution:
    #@param n: Given a decimal number that is passed in as a string
    #@return: A string
    def binaryRepresentation(self, n):
        # write you code here
        int_part = int(float(n))
        dec_part = float('0' + n[n.find('.'):]) if n.find('.') != -1 else 0
        dec_str = ''
        valid = True
        while (len(dec_str) < 32 and dec_part != 0):
            dec_part = dec_part * 2
            if (dec_part >= 1):
                dec_str += '1'
                dec_part -= 1
            else:
                dec_str += '0'
            if (len(dec_str) >= 32 and dec_part != 0):
                valid = False
        if (valid):
            if (dec_str):
                return bin(int_part).replace('0b', '') + '.' + dec_str
            return bin(int_part).replace('0b', '')
        else:
            return 'ERROR'
