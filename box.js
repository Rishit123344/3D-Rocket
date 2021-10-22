AFRAME.registerComponent('move-box',{
    schema:{
        movex:{type:'number',default:1},
        movey:{type:'number',default:1},
    },
    tick:function(){
        this.data.movex = this.data.movex+0.01
        this.data.movey = this.data.movey+0.05
        var pos = this.el.getAttribute("position")
        pos.x = this.data.movex
        pos.y = this.data.movey
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})
AFRAME.registerComponent('rotate-box',{
    schema:{
        movex:{type:'number',default:1}
    },
    tick:function(){
        this.data.movex = this.data.movex+5
        var rotate = this.el.getAttribute("rotation")
        rotate.x = this.data.movex
        rotate.y = this.data.movex
        this.el.setAttribute("rotation",{x:rotate.x,y:rotate.y,z:rotate.z})
    }
})
