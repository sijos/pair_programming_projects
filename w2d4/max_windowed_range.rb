require_relative 'min_max_stack_queue.rb'

# O(n**2)
def naive_windowed_max_range(array, window_size)
  max_range = nil
  array.each_cons(window_size) do |window|	# n
    current_range = window.max - window.min	# 2n
    max_range = current_range if max_range.nil?
    max_range = current_range if current_range > max_range
  end
  max_range
end

# O(n)
def windowed_max_range(array, window_size)
	stack_queue = MinMaxStackQueue.new
	max_range = nil

	array.each do |el|	# n
		stack_queue.enqueue(el)
		stack_queue.dequeue if stack_queue.size > window_size
		current_range = stack_queue.max - stack_queue.min
		if max_range.nil? || current_range > max_range 
			max_range = current_range
		end
	end
	max_range
end
