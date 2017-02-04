class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    hash_num = 42
    self.each_with_index do |el,i|
      hash_num += el.hash * (i + 1)
    end
    hash_num
  end
end

class String
  def hash
    self.chars.map(&:ord).hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.keys.sort.concat(self.values.sort).hash
  end
end
