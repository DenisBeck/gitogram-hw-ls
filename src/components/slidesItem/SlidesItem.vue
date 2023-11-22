<template>
    <div :class="['slide', {'slide-active': active}]">
        <progress-bar v-if="!skeleton" progress="60%" class="slide-progress" />
        <users-item class="slide-user" name="React.reposit" avatar="Andrew" />
        <div :class="['slide-content', {'slide-skeleton': skeleton}]">
            <div class="slide-image"><icon v-if="!skeleton" name="SlideImage" /></div>
            <div v-if="skeleton" class="slide-no-text">
                <div class="slide-skeleton-text">
                    <div /><div /><div />
                </div>
                <div class="slide-skeleton-text">
                    <div /><div /><div />
                </div>
            </div>
            <div v-else class="slide-text">
                <p>The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
                <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
                <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
                <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
                <p>In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            </div>
        </div>
        <app-button :disabled="!active || skeleton" class="slide-button" label="Follow" />
    </div>
</template>

<script>
import { ProgressBar } from '@/components/progressBar'
import { UsersItem } from '@/components/usersItem'
import { Icon } from '@/icons'
import { AppButton } from '@/components/appButton'
export default {
    name: 'slides-item',
    components: {
        ProgressBar,
        UsersItem,
        Icon,
        AppButton
    },
    props: {
        skeleton: {
            type: Boolean,
            default: false
        },
        active: {
            type: Boolean,
            default: false
        }
    }

}
</script>

<style lang="sass" src="./slidesItem.sass" scoped>

</style>
