/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.map = {};
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
    this.listLength = 0;
};

LRUCache.prototype.Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

LRUCache.prototype.setHead = function(node) {
    node.next = this.head;
    node.prev = null;
    if (this.head) {
        this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
        this.tail = node;
    }
    this.map[node.key] = node;
    this.listLength += 1;
}

LRUCache.prototype.remove = function(key) {
    let node = this.map[key];
    if (!node.prev) {
        this.head = node.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
    } else {
        if (!node.next) {
            this.tail = node.prev;
            this.tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }
    delete this.map[key];
    this.listLength -= 1;
}

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    let node;
    if (key in this.map) {
        node = this.map[key];
        node = new this.Node(node.key, node.value);
        this.remove(key);
        this.setHead(node);
        return node.value;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    let node = new this.Node(key, value);
    if (key in this.map) {
        this.remove(key);
    } else {
        if (this.listLength >= this.capacity) {
            this.remove(this.tail.key)
        }
    }
    this.setHead(node)
};
