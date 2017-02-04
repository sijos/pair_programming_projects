require_relative 'min_max_stack_queue.rb'
require 'byebug'

# O(n**2)
def naive_windowed_max_range(array, window_size)
  current_max_range = nil
  array.each_cons(window_size) do |window| # n
    current_range = window.max - window.min # 2n
    current_max_range = current_range if current_max_range.nil?
    current_max_range = current_range if current_range > current_max_range
  end
  current_max_range
end

# O(n)
def windowed_max_range(array, window_size)
	stack_queue = MinMaxStackQueue.new
	max_range = nil
	window_size.times { |n| stack_queue.enqueue(array[n])} # potentially n?
	i = window_size
	while i < array.size # n
		current_range = stack_queue.max - stack_queue.min
		if max_range.nil? || current_range > max_range 
			max_range = current_range
		end
		stack_queue.dequeue
		stack_queue.enqueue(array[i])
		i += 1
	end
	max_range
end

# p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8
