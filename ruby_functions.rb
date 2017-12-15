# Referenced from: https://ruby-doc.org/stdlib-1.9.3/libdoc/prime/rdoc/Prime.html
require 'prime'


def double_value(num=0)
  puts num * 2
end




def check_odd_even(num=0)
  puts num & 1
end




def fizzbuzz()
  1.upto(100) do |i|
    if i % 3 == 0 && i % 5 == 0
      print "FizzBuzz "
    elsif i% 3 == 0
      print "Fizz "
    elsif i % 5 == 0
      print "Buzz "
    else
      print "#{i} "
    end
  end
end




def print_prime()
  Prime.each(100) do |prime|
    puts prime
  end
end


double_value(2)
check_odd_even(2)
check_odd_even(7)
fizzbuzz()
print_prime()
