require 'bundler'
Bundler.setup

require 'erb'
require 'fileutils'
require 'i18n'
require "i18n/backend/fallbacks"
require 'digest'

namespace :docker do
  desc "build docker images"
  task :build => ['css:minify', 'js:minify', 'translations:build'] do
    puts "Building bitcoincash docker image"
    puts `docker build -t bitcoincash .`
  end
end

namespace :css do
  desc "minify css files"
  task :minify do
    puts `juicer merge html/css/deps.css html/css/bootstrap.css html/css/stack-interface.css html/css/socicon.css --force`
    puts `juicer merge html/css/theme.css html/css/custom.css --force`
    puts `juicer merge html/css/custom.css --force`
  end
end

namespace :js do
  desc "minify js files"
  task :minify do
    puts `juicer merge html/js/jquery.easing.1.3.js --force`
    puts `juicer merge html/js/scripts.js html/js/main.js --force`
    puts `juicer merge html/js/ticker.js --force`
  end
end

namespace :translations do
  I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
  I18n.load_path = Dir['./translations/*.yml']
  I18n.default_locale = :en

  desc "build translated html files"
  task :build do
    puts "Building bitcoincash translated html files"
    nginx_template = File.read('nginx.conf.erb')
    nginx_renderer = ERB.new(nginx_template)
    File.write(File.join('.', 'nginx.conf'), nginx_renderer.result())
    graphics_template = File.read('views/graphics.html.erb')
    graphics_renderer = ERB.new(graphics_template, nil, '-')
    FileUtils.mkdir_p(File.join('.', 'html', 'graphics'))
    template = File.read('views/index.html.erb')
    renderer = ERB.new(template, nil, '-')
    I18n.available_locales.sort.each do |locale|
      puts "Building #{locale}"
      I18n.locale = locale
      File.write(File.join('.', 'html', "index.#{locale}.html"), renderer.result())
      File.write(File.join('.', 'html', 'index.html'), renderer.result()) if locale == :en
      FileUtils.mkdir_p(File.join('.', 'html', 'graphics'))
      FileUtils.mkdir_p(File.join('.', 'html', locale.to_s.downcase, 'graphics'))
      File.write(File.join('.', 'html', 'graphics', "index.#{locale}.html"), graphics_renderer.result())
      File.write(File.join('.', 'html', 'graphics', 'index.html'), renderer.result()) if locale == :en
      File.write(File.join('.', 'html', locale.to_s.downcase, 'index.html'), renderer.result())
      File.write(File.join('.', 'html', locale.to_s.downcase, 'graphics', 'index.html'), graphics_renderer.result())
    end
  end
end

task :default => 'docker:build'
