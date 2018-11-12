class NameValidator < ActiveModel::Validator
  def validate(record)
    if record.blank?
      record.errors.add(:base, "Name can't be empty")
      return false
    elsif Restaurant.where(name: record.name).exists?
      record.errors.add(:name_exists, "A restaurant with this name already exists")
      return false
    end
  end
end
