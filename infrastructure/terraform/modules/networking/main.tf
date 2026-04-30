resource "aws_vpn_gateway" "ad_gateway" {
  vpc_id = var.vpc_id

  tags = {
    Name = "Legacy-AD-Hybrid-Gateway"
  }
}

resource "aws_customer_gateway" "onprem_ad" {
  bgp_asn    = 65000
  ip_address = var.onprem_public_ip
  type       = "ipsec.1"

  tags = {
    Name = "OnPrem-AD-Customer-Gateway"
  }
}

resource "aws_vpn_connection" "ad_hybrid_link" {
  vpn_gateway_id      = aws_vpn_gateway.ad_gateway.id
  customer_gateway_id = aws_customer_gateway.onprem_ad.id
  type                = "ipsec.1"
  static_routes_only  = true
}
