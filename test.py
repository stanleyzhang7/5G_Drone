import pandas as pd
import speedtest

servers = []
# If you want to test against a specific server
# servers = [1234]

threads = None
# If you want to use a single threaded test
# threads = 1

s = speedtest.Speedtest()
s.get_servers(servers)
s.get_best_server()
s.download(threads=threads)
s.upload(threads=threads)
s.results.share()

results_dict = s.results.dict()
print(results_dict)

result = {
    'Download': results_dict['download'],
    'Upload': results_dict['upload'],
    'Ping': results_dict['ping'],
    'Server Url': results_dict['server']['url'],
    'Server Location': results_dict['server']['name'],
    'Server Latency': results_dict['server']['latency'],
    'Timestamp': results_dict['timestamp'],
    'Result png': results_dict['share'],
    'Latitude': results_dict['client']['lat'],
    'Longitude': results_dict['client']['lon']
}

result_df = pd.DataFrame(result,index=[0])
result_df.to_csv('test.csv', index=False, header=False, mode = 'a', encoding='cp949')