import pandas as pd

#读取 json 格式文件
def read_json(path_or_buf, dtype='string'):
    return pd.read_json(path_or_buf, dtype=dtype)
# print( read_json() )

#读取 股票列表 数据
def stock_basic(path='/Users/liujunfan/princeljf/node_lhh/lhh/src/datas/stock_basic/', orient='records'):
    path_or_buf = path + orient + '.json'
    return read_json(path_or_buf,dtype='string')
# print( stock_basic() )