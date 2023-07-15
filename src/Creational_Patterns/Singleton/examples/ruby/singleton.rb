class SingletonClass
  attr_accessor :data

  def self.instance
    @instance ||= new
  end

  private_class_method :new

  private

  def initialize
    @data = "Singleton data"
  end
end

# Usage
singleton = SingletonClass.instance
puts singleton.data

# Attempt to create a new instance (will return the existing instance)
new_singleton = SingletonClass.new
puts new_singleton.data