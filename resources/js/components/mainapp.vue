<template>
<div>
    <div>
   <!-- <!//admin side menu?> -->
    <div class="_1side_menu">
    <div class="_1side_menu_logo">
        <h3 style="text-align: center;">Logo image</h3>
    </div>
    
    <!-- <!//menu content> -->
<div class="_1side_menu_content">
    <div class="_1side_menu_img_name">
        <p class="_1side_menu_name">admin</p>
     </div>
    
     <!-- <!//menu list>  -->

     <div class="_1side_menu_list">
        <ul class="_1side_menu_list_ul">
            <li><router-link to="/"><Icon type="ios-speedometer"/>Dashboard</router-link></li>
            <li><router-link to="/tags"><Icon type="ios-speedometer"/>Tags</router-link></li>

            </ul>
        </div>
      </div>
    </div>

<!-- <!//header> -->
<div class="header">
    <div class="_2menu _box_shadow">
    <div class="_2menu_logo">
        <ul class="opem_button">
            <li>
                <Icon type="ios-list"/>
            </li>
        </ul>
</div>
</div>
    </div>

    <!-- <!//header> -->
</div>

<router-view/>

</div>

</template>