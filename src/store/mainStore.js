import { makeAutoObservable } from "mobx";
import { findPrimes, getPrimeNumbers, getPrimesSum } from "../utils";

class MainStore {
    limit = null;
    limitError = null;
    primes = [];
    sum = null;
    computeLoading = false

    constructor() {
        makeAutoObservable(this);
    }

    get isComputeAvailable() { return !this.limitError && this.limit }

    setLimit = (value) => {
        if (+value > 10000) {
            this.limitError = 'Количество чисел не должно превышать 10 000';
        } else {
            this.limitError = null;
        }

        this.limit = value;
    }

    compute = () => {
        this.sum = null;
        this.primes = [];
        this.computeLoading = true;

        const primeArray = findPrimes();
        this.primes = getPrimeNumbers(primeArray, this.limit);
        this.sum = getPrimesSum(this.primes);

        this.computeLoading = false;
    }
}

export const store = new MainStore();