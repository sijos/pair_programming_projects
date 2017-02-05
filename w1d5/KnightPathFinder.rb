require_relative './skeleton/lib/00_tree_node.rb'

class KnightPathFinder
  MOVES = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [-1, -2],
    [-2, -1],
    [1, -2],
    [2, -1]
  ]

  def initialize(pos = [0,0])
   @pos = pos
   @visited_positions = [pos]
   @move_tree = build_move_tree
  end

  def self.valid_moves(pos)
    x = pos[0]
    y = pos[1]
    possibles = MOVES.map { |mx, my| [x + mx, y + my] }
    possibles.select { |move| move.all? { |m| m.between?(0,7) } }
  end

  def new_move_positions(pos)
    moves = self.class.valid_moves(pos).reject do |s|
      @visited_positions.include?(s)
    end
    moves.each { |move| @visited_positions << move }
    moves
  end

  def build_move_tree
    root = PolyTreeNode.new(@pos)
    queue = [root]
    until queue.empty?
      parent = queue.shift
      options = new_move_positions(parent.value)
      options.each do |option|
        node = PolyTreeNode.new(option)
        node.parent=(parent)
        queue << node
      end
    end
    root
  end

  def find_path(end_pos)
    trace_path_back(@move_tree.dfs(end_pos))
  end

  def trace_path_back(end_node)
    path = []
    current_pos = end_node
    until path.include?(@move_tree.value)
      path.unshift(current_pos.value)
      current_pos = current_pos.parent
    end
    path
  end

end
