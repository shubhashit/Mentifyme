import React from 'react'
import Chapters from './Chapters'

export default function SubjectMathematics12() {
  return (
      <div className='flex flex-row w-full justify-between pr-32 mb-6'>
          <div>
              <Chapters chapter="Matrices"></Chapters>
              <Chapters chapter="Determinants"></Chapters>
              <Chapters chapter="Vectors"></Chapters>
              <Chapters chapter="3D Geometry"></Chapters>
              <Chapters chapter="Probability"></Chapters>
          </div>
          <div>
              <Chapters chapter="Limits"></Chapters>
              <Chapters chapter="Continutiy & Differentiability"></Chapters>
              <Chapters chapter="Indefinate Integration"></Chapters>
              <Chapters chapter="Definate Integration"></Chapters>
              <Chapters chapter="Differential Equation"></Chapters>
          </div>
          <div>
              <Chapters chapter="Application of Derivatives"></Chapters>
              <Chapters chapter="Area"></Chapters>
              <Chapters chapter="Mathematical Reasoning"></Chapters>
          </div>
      </div>
  )
}
