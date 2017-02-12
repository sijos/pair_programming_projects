require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    class_name.constantize
  end


  def table_name
    return "humans" if class_name == "Human"
    class_name.pluralize.downcase.underscore
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    defaults = {
      primary_key: :id,
      foreign_key: ("#{name.to_s.downcase}_id").to_sym,
      class_name: name.to_s.camelcase
    }

    defaults.each { |k, v| options[k] = v if options[k].nil? }

    @primary_key = options[:primary_key]
    @foreign_key = options[:foreign_key]
    @class_name = options[:class_name]
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    defaults = {
      primary_key: :id,
      foreign_key: ("#{self_class_name.singularize.to_s.downcase}_id").to_sym,
      class_name: name.singularize.to_s.camelcase
    }

    defaults.each { |k, v| options[k] = v if options[k].nil? }

    @primary_key = options[:primary_key]
    @foreign_key = options[:foreign_key]
    @class_name = options[:class_name]
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    bt_options = BelongsToOptions.new(name, options)

    result = nil

    define_method(name) do
      f_key = self.send(bt_options.foreign_key)
      result = bt_options.model_class.where({id: f_key}).first
    end

    result
  end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  extend Associatable
end
