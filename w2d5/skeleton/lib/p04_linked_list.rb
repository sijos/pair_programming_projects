require 'byebug'

class Link
  attr_accessor :key, :val, :prev, :next

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @prev = nil
    @next = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    @prev.next = @next
    @next.prev = @prev
  end
end

class LinkedList
  include Enumerable

  attr_accessor :tail, :head

  def initialize
    @head = Link.new
    @tail = Link.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    self.each { |link| return link.val if link.key == key }
    nil
  end

  def include?(key)
    self.any? { |link| link.key == key }
  end

  def append(key, val)
    if self.include?(key)
      self.each { |link| link.val = val if link.key == key }
    else
      new_link = Link.new(key, val)
      new_link.next = @tail
      new_link.prev = @tail.prev
      @tail.prev = new_link
      new_link.prev.next = new_link
    end
  end

  def update(key, val)
    self.each { |link| link.val = val if link.key == key }
    nil
  end

  def remove(key)
    self.each do |link|
      if link.key == key
        link.prev.next = link.next
        link.next.prev = link.prev
        return link
      end
    end
    nil
  end

  def each(&prc)
    i = @head.next
    
    until i == @tail
      prc.call(i)
      i = i.next
    end

    self
  end

  #uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
