class Sorter {
    constructor() {
        this.arr = [];
        this.compareFunction = function (a,b) {
            return a - b;
        }
    }

    add(element) {
        this.arr.push(element);

    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {

        let newArr = [];

        indices.sort();

        for(let i = 0; i < indices.length; i++){
            newArr.push(this.arr[indices[i]]);
        }

        newArr.sort(this.compareFunction);

        for(let i = 0; i < indices.length; i++){
            this.arr.splice(indices[i], 1, newArr[i]);
        }

        return this.arr;
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;