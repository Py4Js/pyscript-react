class Fibonacci:
  def __init__(self):
      self.fibonacci_cache = {}
  def sequence(self, n) -> int:
      if n in self.fibonacci_cache:
          return self.fibonacci_cache[n]
      if n == 1:
          return 1
      elif n == 2:
          return 1
      elif n > 2:
          self.fibonacci_cache[n] = self.sequence(n-1) + self.sequence(n-2)
          return self.fibonacci_cache[n]

fibonacci = Fibonacci()
for x in range(100):
  print(fibonacci.sequence(x))