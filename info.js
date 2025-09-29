import React from "react";
import { Button, Card, CardBody, Container } from "reactstrap";

function Info() {
    return(
        <Container  fluid>
        <div style={{padding:"20px"}}>
            <div>
        <Card>
            <CardBody>
                 
                   <div style={{ display: "flex", gridTemplateColumns: "1fr 6fr", gap: "10px" , alignItems:"center" , padding:"9px"}}>
                    <div style={{flex:"1", marginRight:"20px"}}>
                <h1>Collectibles</h1>
                <h6>The world of Game is vast, so why not take it beyond its blocky borders?</h6>
                   <h6>Customize your device with our favorite Game wallpapers, social banners,</h6><h6> and more!</h6>
                   <Button color="primary" outline style={{marginTop:"10px"}}>Explore Collectibles</Button>
                </div>
              <div style={{ display: "flex", gridTemplateColumns: "1fr 6fr", gap: "20px" , alignItems:"center" , padding:"9px"}}>
                    <Card style={{ width: "420px", borderRadius: "5px" }}>
                        <CardBody style={{}}>
                            <div>
                            <img src="https://staticg.sportskeeda.com/editor/2022/09/bf891-16625904339411-1920.jpg" style={{width:"380px", height:"240px"}}></img>
                            <h4>Wallpapers</h4>
                            <h5 style={{color:"gray"}}>15- year anniversary</h5>
                            </div>
                        </CardBody>
                    </Card>
                    <div>
                    <Card style={{ width: "420px", borderRadius: "5px" }}>
                        <CardBody style={{}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvMDDEZ4gi1DgL8qkeAuFFAocqbFun2oWdg&s" style={{width:"380px", height:"240px"}}></img>
                             <h4>Wallpapers</h4>
                            <h5 style={{color:"gray"}}>15- year anniversary</h5>
                        </CardBody>
                    </Card>
                    </div>
                    </div>

                </div>
            </CardBody>
        </Card>
            </div>
        </div>


       <footer
  style={{
    backgroundColor: "#111", // dark background
    color: "#fff",
    padding: "40px 60px",
  }}
>
  <div
    style={{

      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    {/* Left: Logos + Info */}
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <img
        src="" // replace with your store logo
        alt="Game Store"
        style={{ height: "50px" }}
      />
      <p style={{ fontSize: "12px", color: "#aaa" }}>
        © 2025 Game Era. All rights reserved.
      </p>
      <p style={{ fontSize: "12px", color: "lightgreen" }}>
        Terms of Service | Privacy Policy | Manage Consent
      </p>
    </div>

    {/* Middle: Links */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gap: "40px",
      }}
    >
      <div>
        <h4>Games</h4>
        <p>New Releases</p>
        <p>Top Charts</p>
        <p>Free-to-Play</p>
        <p>Trending Now</p>
      </div>
      <div>
        <h4>Community</h4>
        <p>Forums</p>
        <p>Events</p>
        <p>Creator Hub</p>
        <p>Careers</p>
      </div>
      <div>
        <h4>Shop</h4>
        <p>Gift Cards</p>
        <p>Merchandise</p>
        <p>Deals & Offers</p>
      </div>
      <div>
        <h4>Support</h4>
        <p>Help Center</p>
        <p>Account Issues</p>
        <p>Report a Problem</p>
        <p>Download App</p>
      </div>
    </div>

    {/* Right: ESRB-like rating (or any info box) */}
    <div>
      <div
        style={{
          border: "2px solid #fff",
          padding: "10px",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>Rated T</p>
        <p style={{ margin: 0 }}>Teen 13+</p>
        <p style={{ margin: "5px 0 0 0" }}>Mild Violence</p>
        <p style={{ margin: 0 }}>Online Interactions</p>
      </div>
    </div>
  </div>

  {/* Bottom row */}
  <div
    style={{
      borderTop: "1px solid #333",
      marginTop: "40px",
      paddingTop: "20px",
      textAlign: "center",
      fontSize: "12px",
      color: "#aaa",
    }}
  >
    <p>
      Pricing & Refunds | Terms of Use | Trademarks | About Us © 2025 Game Era
    </p>
  </div>
</footer>


        </Container>
    )
}
export default Info;
