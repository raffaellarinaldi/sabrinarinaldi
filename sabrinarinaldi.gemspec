# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "sabrinarinaldi"
  spec.version       = "1.0.0"
  spec.authors       = ["Raffaella Rinaldi"]
  spec.email         = ["info@raffaellarinaldi.me"]

  spec.summary       = "Sabrina Rinaldi"
  spec.homepage      = "http://www.sabrinarinaldi.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2.1"
end
