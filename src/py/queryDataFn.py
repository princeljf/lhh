import tushare as ts
import dataProcessing as DP

#设置token
ts.set_token('667cebb835b7c7c4b92adf730806e90a2b7849ae573eb3a24f1c3a7a')
#初始化pro接口
pro = ts.pro_api()

#查询指数基础信息
def index_basic(market, publisher='', category=''):
    return pro.index_basic(market=market, publisher=publisher, category=category)
# print( index_basic('SSE') )

#查询当前所有正常上市交易的股票列表
def stock_basic(exchange='', list_status='L', fields='ts_code,symbol,name,area,industry,market,exchange,list_date'):
    return pro.stock_basic(exchange=exchange, list_status=list_status, fields=fields)
# print( stock_basic() )

#查询一只股票数据
def code(code, start_date='', end_date=''):
    ts_code = DP.code2ts_code(code)
    return pro.daily(ts_code=ts_code[0], start_date=start_date, end_date=end_date)
# print( code('000001') )
# print( code('000001', '20180101' ,'20190101') )

#查询某一天所有股票数据
def code2date(trade_date):
    return pro.daily(trade_date=trade_date)
# print( code2date('20180810') )

