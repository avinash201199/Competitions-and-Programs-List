public class fibonacci {

    public int fib (int N) {
        
        int[] dp = new int[N + 1];

        if (N < 2) {
            return N;
        }
        if (dp[N] != 0) {
            return dp[N];
        }
        return dp[N] = fib(N - 1) + fib(N - 2);
    }
}