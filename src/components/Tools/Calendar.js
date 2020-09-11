import React from 'react';
import '../Tools/live.css';


const Calendar = () => (                           
  <div>
  <script type="text/javascript" 
  src="https://widgets.myfxbook.com/scripts/fxCalendar.js?ps=20"></script>
 <div className="calendarpowered">Powered by <a href="https://www.myfxbook.com"class="myfxbookLink" ><b>Myfxbook.com</b></a></div>
 <script type="text/javascript">showCalendarWidget()</script>
 <script type="text/javascript" src="https://widgets.myfxbook.com/scripts/toolbar.js"></script>
 
 <iframe className="calendar" src="https://widgets.myfxbook.com/widgets/calendar.html"/>
 </div>



);
export default Calendar;