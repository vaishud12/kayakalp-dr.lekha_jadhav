'use client';

import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Calendar, FlaskConical, ClipboardCheck, Stethoscope, Rocket } from 'lucide-react';
import { timeline } from '../lib/mock';

const getIcon = (iconName) => {
  const icons = {
    Calendar, FlaskConical, ClipboardCheck, Stethoscope, Rocket
  };
  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" /> : null;
};

const CustomTimeline = ({ id }) => {
  const colorMap = {
    teal: 'primary',
    blue: 'primary',
    emerald: 'success',
    purple: 'secondary',
    amber: 'warning'
  };

  const pulseColorMap = {
    teal: '#14b8a6',
    blue: '#3b82f6',
    emerald: '#10b981',
    purple: '#a855f7',
    amber: '#f59e0b'
  };

  return (
    <section id={id} className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden">
      
      {/* Teal shadow — top left */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      
      {/* Teal shadow — bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl shadow-[0_0_100px_rgba(20,184,166,0.3)]"></div>
      
      {/* Decorative SVG curves — top right */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none opacity-40">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="3" />
        </svg>
      </div>
      
      {/* Decorative SVG curves — bottom left */}
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 pointer-events-none opacity-40 rotate-180">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 0 C220 60, 270 160, 320 210" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 50 C200 100, 250 200, 320 260" stroke="#14B8A6" strokeWidth="3" />
          <path d="M320 100 C180 140, 230 240, 320 310" stroke="#14B8A6" strokeWidth="3" />
        </svg>
      </div>
      
      {/* Decorative corner circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-teal-500 to-emerald-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-teal-300 rounded-full opacity-10 blur-2xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Your step-by-step journey to wellness with our comprehensive care approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Timeline position="alternate">
            {timeline.map((item, index) => (
              <TimelineItem key={item.id}>
                <TimelineOppositeContent
                  sx={{
                    m: 'auto 0',
                    flex: { xs: 0.2, sm: 1 },
                    paddingLeft: { xs: 0, sm: 2 },
                    paddingRight: { xs: 1, sm: 2 }
                  }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography 
                    variant="caption" 
                    className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-xs sm:text-sm font-bold shadow-md"
                  >
                    <span className="hidden sm:inline">Step</span> {item.id}
                  </Typography>
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: index === 0 ? 'transparent' : 'primary.main' }} />
                  <TimelineDot 
                    color={colorMap[item.color] || 'primary'}
                    sx={{ 
                      padding: { xs: '8px', sm: '12px' },
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                      overflow: 'visible'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center text-white">
                      {getIcon(item.icon)}
                    </span>
                    {/* Pulse effect */}
                    <span 
                      className="absolute inset-0 rounded-full opacity-75 animate-ping"
                      style={{
                        backgroundColor: pulseColorMap[item.color] || '#14b8a6'
                      }}
                    />
                  </TimelineDot>
                  <TimelineConnector 
                    sx={{ 
                      bgcolor: index === timeline.length - 1 ? 'transparent' : 'primary.main' 
                    }} 
                  />
                </TimelineSeparator>
                
                <TimelineContent sx={{ py: '12px', px: { xs: 0.5, sm: 2 } }}>
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-500 p-3 sm:p-5 hover:-translate-y-1">
                    <Typography variant="h6" component="span" className="font-bold text-gray-900 text-sm sm:text-lg">
                      {item.title}
                    </Typography>
                    <Typography className="text-gray-600 text-xs sm:text-base mt-1 sm:mt-2 leading-snug sm:leading-normal">
                      {item.description}
                    </Typography>
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default CustomTimeline;
