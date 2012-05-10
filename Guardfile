# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'compass' do
  watch('^sass/(.*)\.s[ac]ss')
  watch('^sass/(.*)\._s[ac]ss')
end

guard 'livereload' do
  watch(%r{stylesheets/.+\.(css|js|html)})
end
