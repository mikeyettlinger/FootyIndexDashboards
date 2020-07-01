class PagesController < ApplicationController

def index
  require 'csv'

  csv_options = { col_sep: ' ' }

  dirname = File.basename(Dir.getwd)
  csv_text = File.read('app/sample_value_ts.csv')

  csv = CSV.parse(csv_text, csv_options)
  @xaxis = []
  @yaxis = []
  csv.each do |row|
      @xaxis << row[0].to_f
      @yaxis << row[1].to_f
  end




  @xaxis
  @yaxis



  end

end
