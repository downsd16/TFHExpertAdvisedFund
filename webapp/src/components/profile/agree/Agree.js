import './agree.css';
import "@fontsource/dm-sans";
import React from 'react';
import Prog_Bar from '../../progress-bar/Prog_Bar.js'


const Agree = () => {

    return(
        <>
        <div className='header'>
            <h1 className='headerText'>Apply to Become an Expert</h1>
            <Prog_Bar completed={99} />
        </div>
        <div className='header'>
            <p className='subheader'>Declaration and Terms of Engagement</p>
        </div>
        <div className='wrapperBody'>
            <div className='scrollable-terms'>
                <p className='termsText'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis rhoncus. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Enim tortor at auctor urna nunc. Pulvinar pellentesque habitant morbi tristique. At ultrices mi tempus imperdiet nulla malesuada. Vitae sapien pellentesque habitant morbi. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Sapien eget mi proin sed libero enim sed faucibus. Egestas sed tempus urna et pharetra pharetra. Auctor eu augue ut lectus arcu bibendum. Eu volutpat odio facilisis mauris. Leo vel fringilla est ullamcorper eget nulla. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Ultrices eros in cursus turpis massa. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Id porta nibh venenatis cras sed. Ligula ullamcorper malesuada proin libero nunc consequat.
                <br></br><br></br>
                Eget nulla facilisi etiam dignissim diam quis. Tempus quam pellentesque nec nam aliquam sem et. Orci dapibus ultrices in iaculis nunc sed. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Vitae congue mauris rhoncus aenean vel. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nisl suscipit adipiscing bibendum est ultricies integer. Senectus et netus et malesuada fames ac turpis egestas maecenas. Mattis pellentesque id nibh tortor id aliquet lectus proin. Volutpat lacus laoreet non curabitur gravida arcu. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Nec ullamcorper sit amet risus nullam eget. Varius vel pharetra vel turpis nunc. Nam libero justo laoreet sit. Purus semper eget duis at tellus at urna. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Egestas maecenas pharetra convallis posuere morbi leo urna. Lacus sed turpis tincidunt id aliquet risus feugiat in.
                <br></br><br></br>
                Semper risus in hendrerit gravida rutrum quisque non tellus orci. Arcu bibendum at varius vel pharetra vel turpis nunc. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Etiam dignissim diam quis enim lobortis scelerisque. Dictumst quisque sagittis purus sit. Rutrum quisque non tellus orci ac auctor augue. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Urna cursus eget nunc scelerisque. Nibh sed pulvinar proin gravida. Pretium vulputate sapien nec sagittis. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. At imperdiet dui accumsan sit amet nulla facilisi. In fermentum posuere urna nec tincidunt praesent. Enim facilisis gravida neque convallis a cras semper auctor. Quis enim lobortis scelerisque fermentum dui.
                <br></br><br></br>
                Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Eu consequat ac felis donec et odio. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Volutpat commodo sed egestas egestas fringilla. Venenatis tellus in metus vulputate eu scelerisque. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Et tortor at risus viverra adipiscing at in. Consectetur a erat nam at lectus urna duis convallis.
                <br></br><br></br>
                Id diam vel quam elementum pulvinar etiam. Facilisis sed odio morbi quis commodo. Enim ut tellus elementum sagittis vitae et leo. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Congue nisi vitae suscipit tellus mauris a. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sed velit dignissim sodales ut eu sem integer vitae justo. Molestie ac feugiat sed lectus vestibulum mattis. Bibendum neque egestas congue quisque.
                </p>
            </div>
            <div className='inputContainer'>
                <button type="submit" className='back'>Back</button>
                <button type="submit" className='submit'>Agree</button>
            </div>
        </div>
        </>
    )
}

export default Agree;