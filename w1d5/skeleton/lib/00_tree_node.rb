class PolyTreeNode
   def initialize(value)
     @value = value
     @parent = nil
     @children = []
   end

   def parent
     @parent
   end

   def children
     @children
   end

   def value
     @value
   end

   def parent=(new_parent)
     @parent.children.delete(self) unless @parent.nil?
     @parent = new_parent
     unless self.parent.nil? || new_parent.children.include?(self)
       new_parent.children << self
     end
   end

   def add_child(child_node)
     child_node.parent=(self)
   end

   def remove_child(child_node)
     raise "that's not your child!" unless self.children.include?(child_node)
     child_node.parent=(nil)
   end

   def dfs(target_value)
     return self if value == target_value

     children.each do |child|
       result = child.dfs(target_value)
       return result if result
     end
     nil
   end

   def bfs(target_value)
     queue = [self]
     until queue.empty?
       check_el = queue.shift
       return check_el if check_el.value == target_value
       queue += check_el.children
     end
     nil
   end
end
