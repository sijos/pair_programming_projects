class ModelBase

  def self.pluralize
    if self.to_s == 'Reply'
      'replies'
    else
      self.to_s.downcase + 's'
    end
  end

  def self.find_by_id(id)
    model = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT * FROM #{self.pluralize} WHERE id = ?
    SQL
    return nil if model.empty?
    self.new(model.first)
  end

  def self.all
    models = QuestionsDatabase.instance.execute(<<-SQL)
      SELECT * FROM #{self.pluralize}
    SQL

    models.map { |model| self.new(model) }
  end

  def save
    ivars = self.instance_variables # returns an array of symbols, id first always
    id = ivars.first
    others = ivars[1..-1]

    if self.id
      # update
      QuestionsDatabase.instance.execute(<<-SQL, #{others.join(', ')}, #{id.to_s})
        UPDATE #{self.pluralize}
        SET #{(others.join(', ')+',').tr('@','').gsub(',',' = ?,').slice(0...-1)}
        WHERE id = ?
      SQL
    else
      #  # create
      QuestionsDatabase.instance.execute(<<-SQL, #{others.join(', ')})
        INSERT INTO #{self.pluralize} (#{others.join(', ').tr('@','')})
        VALUES (?, ?, ?)
      SQL

      self.id = QuestionsDatabase.instance.last_insert_row_id
    end
  end
end
