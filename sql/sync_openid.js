

update tb_customers a ,(select * from tb_wx_customers) b ,set  a.openid = b.openid where   b.unionid = a.unionid;

update tb_customers a set a.openid = (select openid from tb_wx_customers b where b.unionid = a.unionid);