require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  include Enumerable

  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    bucket(key).include?(key)
  end

  def set(key, val)
    resize! if count == num_buckets
    temp_link = get(key)
    bucket(key).append(key, val)
    @count += 1 if temp_link.nil?
  end

  def get(key)
    bucket(key).get(key)
  end

  def delete(key)

    link_check = bucket(key).remove(key)
    @count -= 1 unless link_check.nil?
  end

  def each(&prc)
    @store.each do |list|
      list.each do |link|
        k = link.key
        v = link.val
        prc.call(k, v)
      end
    end

    @store
  end

  #uncomment when you have Enumerable included
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(num_buckets * 2) { LinkedList.new }
    @store.each do |list|
      list.each do |link|
        new_arr[link.key.hash % new_arr.size].append(link.key, link.val)
      end
    end
    @store = new_arr
  end

  def bucket(key)
    @store[key.hash % num_buckets]

  end
end
