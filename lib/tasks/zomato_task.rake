require_relative '../../app/workers/zomato_worker'

task :zomato_task do
  ZomatoWorker.perform_async('zomato_worker', 1)
end