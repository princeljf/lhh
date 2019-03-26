#生成 json 格式文件
def to_json(df, path_or_buf, orient, force_ascii=True):
    df.to_json(path_or_buf, orient, force_ascii)

#生成 股票列表 数据
def stock_basic(df, path='/Users/liujunfan/princeljf/node_lhh/lhh/src/datas/stock_basic/', orientArr=['columns','records','index','split','values'], force_ascii=True):
    for orient in orientArr:
        path_or_buf = path + orient + '.json'
        to_json(df,path_or_buf,orient,force_ascii)
# print( stock_basic() )