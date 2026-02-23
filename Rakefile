require 'bundler'
Bundler.setup

require 'erb'
require 'fileutils'
require 'i18n'
require "i18n/backend/fallbacks"
require 'digest'
require 'time'
require 'terser'
require 'sass-embedded'

def js_minify(input_files, output_file)
  input = input_files.map { |f| File.read(f) }.join("\n")
  File.write(output_file, Terser.compile(input, output: { comments: :none }))
  puts "Minified #{output_file}"
end

def css_minify(input_files, output_file)
  input = input_files.map { |f| File.read(f) }.join("\n")
  result = Sass.compile_string(input, style: :compressed, syntax: :css)
  File.write(output_file, result.css)
  puts "Minified #{output_file}"
end

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
    css_minify(
      ['html/css/deps.css', 'html/css/bootstrap.css', 'html/css/stack-interface.css', 'html/css/socicon.css'],
      'html/css/deps.min.css'
    )
    css_minify(
      ['html/css/theme.css', 'html/css/custom.css'],
      'html/css/theme.min.css'
    )
    css_minify(
      ['html/css/custom.css'],
      'html/css/custom.min.css'
    )
  end
end

namespace :js do
  desc "minify js files"
  task :minify do
    js_minify(
      ['html/js/jquery.easing.1.3.js'],
      'html/js/jquery.easing.1.3.min.js'
    )
    js_minify(
      ['html/js/scripts.js', 'html/js/main.js'],
      'html/js/scripts.min.js'
    )
    js_minify(
      ['html/js/ticker.js'],
      'html/js/ticker.min.js'
    )
  end
end

namespace :translations do
  I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
  I18n.load_path = Dir['./translations/*.yml']
  I18n.default_locale = :en

  desc "build translated html files"
  task :build do
    puts "Building bitcoincash translated html files"
    nginx_template = File.read('views/nginx.conf.erb')
    nginx_renderer = ERB.new(nginx_template)
    File.write(File.join('.', 'nginx.conf'), nginx_renderer.result())
    graphics_template = File.read('views/graphics.html.erb')
    graphics_renderer = ERB.new(graphics_template, trim_mode: '-')
    FileUtils.mkdir_p(File.join('.', 'html', 'graphics'))
    build_time = Time.now.utc.strftime('%Y-%m-%dT%H:%M:%S+00:00')
    sitemap_template = File.read('views/sitemap.xml.erb')
    sitemap_renderer = ERB.new(sitemap_template, trim_mode: '-')
    File.write(File.join('.', 'html', 'sitemap.xml'), sitemap_renderer.result(binding))
    puts "Generated sitemap.xml"
    template = File.read('views/index.html.erb')
    renderer = ERB.new(template, trim_mode: '-')
    I18n.available_locales.sort.each do |locale|
      puts "Building #{locale}"
      I18n.locale = locale
      File.write(File.join('.', 'html', "index.#{locale}.html"), renderer.result())
      File.write(File.join('.', 'html', 'index.html'), renderer.result()) if locale == :en
      FileUtils.mkdir_p(File.join('.', 'html', 'graphics'))
      FileUtils.mkdir_p(File.join('.', 'html', locale.to_s.downcase, 'graphics'))
      File.write(File.join('.', 'html', 'graphics', "index.#{locale}.html"), graphics_renderer.result())
      File.write(File.join('.', 'html', 'graphics', 'index.html'), graphics_renderer.result()) if locale == :en
      File.write(File.join('.', 'html', locale.to_s.downcase, 'index.html'), renderer.result())
      File.write(File.join('.', 'html', locale.to_s.downcase, 'graphics', 'index.html'), graphics_renderer.result())
    end
  end
end

task :default => 'docker:build'