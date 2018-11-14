require

task :zomato_task do
  ZomatoWorker.perform_async('bob', 5)
end