import React from 'react'
import Chapters from './Chapters'

export default function SubjectsMathematics11() {
  return (
      <div className='flex flex-row w-full justify-between pr-32 mb-6'>
          <div>
              <Chapters chapter= "Sets , Relation & Function"></Chapters>
              <Chapters chapter= "Complex Number"></Chapters>
              <Chapters chapter= "Quadratic equation"></Chapters>
              <Chapters chapter= "Sequence & series"></Chapters>
              <Chapters chapter= "Binomial Relation"></Chapters>
          </div>
          <div>
              <Chapters chapter= "Permutation & Combination"></Chapters>
              <Chapters chapter= "Quadratic equation"></Chapters>
              <Chapters chapter= "Trigonometry"></Chapters>
              <Chapters chapter= "Statistics"></Chapters>
              <Chapters chapter= "Straight Lines"></Chapters>
          </div>
          <div>
              <Chapters chapter= "Circles"></Chapters>
              <Chapters chapter= "Parabola"></Chapters>
              <Chapters chapter= "Ellipse"></Chapters>
              <Chapters chapter= "Hyperbola"></Chapters>
          </div>
      </div>
  )
}
