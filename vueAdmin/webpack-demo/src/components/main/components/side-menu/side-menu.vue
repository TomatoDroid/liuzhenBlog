<template>
	<div>
		<slot></slot>
		<Menu>
			<template>
				<template>
					<side-menu-item></side-menu-item>
					<menu-item></menu-item>
				</template>
				<template>
					<side-menu-item></side-menu-item>
					<menu-item></menu-item>
				</template>
			</template>
		</Menu>
		<div>
			<template>
				<coolapsed-menu></coolapsed-menu>
				<Tooltip>
					<a href=""></a>
				</Tooltip>
			</template>
		</div>
	</div>
</template>
<script>
import SideMenuItem from './side-menu-item.vue'

export default {
	name:'SideMenu',
}
</script>
